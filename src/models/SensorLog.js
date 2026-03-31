import mongoose from "mongoose";

const sensorLogSchema = new mongoose.Schema(
  {
    gas: {
      type: Number,
      default:0
    },
    temperature: {
      type: Number,
     
      default:0
    },
    vibration: {
      type: Number,
     
      default:0
    },
    current: {
      type: Number,
  
      default:0
    },
    rpm: {
      type: Number,
   
      default:0
    }
  },
  {
    timestamps: true
  }
);

const SensorLog = mongoose.model("SensorLog", sensorLogSchema);

export default SensorLog;
