import SensorLog from "../models/SensorLog.js";

/* POST sensor data */
export const createSensorLog = async (req, res) => {
  try {

    console.log("Incoming:", req.body); // 🔍 FULL PAYLOAD LOG

    const {
      gas,
      temperature,
      vibration,
      current,
      rpm
    } = req.body;

    // 🔴 VALIDATION LOGGING (ADD HERE)
    if (gas === undefined) console.log("⚠️ Gas missing");
    if (temperature === undefined) console.log("⚠️ Temperature missing");
    if (vibration === undefined) console.log("⚠️ Vibration missing");
    if (current === undefined) console.log("⚠️ Current missing");
    if (rpm === undefined) console.log("⚠️ RPM missing");

    const log = new SensorLog({
      gas: Number(gas) || 0,
      temperature: Number(temperature) || 0,
      vibration: Number(vibration) || 0,
      current: Number(current) || 0,
      rpm: Number(rpm) || 0
    });

    const saved = await log.save();

    res.status(201).json(saved);

  } catch (error) {
    console.error("SAVE ERROR:", error.message);
    res.status(200).json({ msg: "Handled safely" });
  }
};

/* GET latest sensor reading */
export const getLatestSensor = async (req, res) => {
  try {

    const latest = await SensorLog
      .findOne()
      .sort({ createdAt: -1 });

    res.json(latest);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* GET trend data */
export const getSensorTrends = async (req, res) => {
  try {

    const limit = parseInt(req.query.limit) || 30;

    const logs = await SensorLog
      .find()
      .sort({ createdAt: -1 })
      .limit(limit);

    res.json(logs.reverse());

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
