import React from "react";
import { Link } from "react-router-dom";
import "./ArtisanCard.scss";

export default function ArtisanCard({ rating, title, category, description, city }) {
  return (
    <div className="artisan-card">
      <div className="artisan-card__header">
        <div className="artisan-card__rating">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>
        <span className="artisan-card__category">{category}</span>
      </div>

      <h3 className="artisan-card__title">{title}</h3>

      <p className="artisan-card__description">{description}</p>

      <div className="artisan-card__city">{city}</div>
    </div>
  );
}
