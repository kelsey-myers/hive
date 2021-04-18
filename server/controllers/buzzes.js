import mongoose from "mongoose";
import BuzzMessage from "../models/buzzMessage.js";
import express from "express";

export const getBuzzes = async (req, res) => {
  try {
    const buzzMessages = await BuzzMessage.find();

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

export const updateBuzz = async (req, res) => {
  const { id: _id } = req.params;
  const buzz = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No buzz with that ID");

  const updatedBuzz = await BuzzMessage.findByIdAndUpdate(
    _id,
    { ...buzz, _id },
    {
      new: true,
    }
  );

  res.json(updatedBuzz);
};

export const deleteBuzz = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No buzz with that ID");

  await BuzzMessage.findByIdAndRemove(id);

  res.json({ message: "Buzz deleted successfully." });
};

export const likeBuzz = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No buzz with that ID");

  const buzz = await BuzzMessage.findById(id);
  const updatedBuzz = await BuzzMessage.findByIdAndUpdate(
    id,
    { likeCount: buzz.likeCount + 1 },
    { new: true }
  );

  res.json(updatedBuzz);
};
