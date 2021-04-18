import BuzzMessage from "../models/buzzMessage.js";
import PostMessage from "../models/buzzMessage.js";

export const getBuzzes = async (req, res) => {
  try {
    const buzzMessages = await PostMessage.find();

    console.log(buzzMessages);
    res.status(200).json(buzzMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBuzz = async (req, res) => {
  const buzz = req.body;
  const newBuzz = new BuzzMessage(buzz);

  try {
    await newBuzz.save();
    res.status(201).json(newBuzz);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
