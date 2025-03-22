import React, { useState } from "react";
import axios from "axios";

const SubscriptionCardForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [features, setFeatures] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    const featuresArray = features.split(",").map((feature) => feature.trim());

    const newCard = {
      title,
      description,
      price,
      duration,
      features: featuresArray,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/subscription", newCard);
      if (res.status === 201) {
        setMessage("Subscription card created successfully!");
        setTitle("");
        setDescription("");
        setPrice("");
        setDuration("");
        setFeatures("");
      } else {
        setMessage("Error creating subscription card.");
      }
    } catch (error) {
      console.error("Error creating subscription card:", error);
      setMessage("Error creating subscription card.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-screen-red">Add Subscription Card</h2>
      {message && <p className="mb-4 text-center">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Duration</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">
            Features <span className="text-sm">(comma separated)</span>
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            required
          />
        </div>

        <button
        
          type="submit"
          className="w-full bg-screen-red text-white py-2 rounded hover:bg-opacity-80 transition duration-300"
        >
          Add Subscription
        </button>
      </form>
    </div>
  );
};

export default SubscriptionCardForm;
