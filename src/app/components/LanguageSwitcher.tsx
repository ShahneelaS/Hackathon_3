"use client";

const LanguageSwitcher = () => {
  return (
    <div className="p-6 ">
      
      <select className="border p-2 w-full">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
