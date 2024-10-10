const InputField = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  icon: Icon,
}) => {
  return (
    <div className="mb-4 flex flex-col">
      <div className="mb-2 flex items-center">
        {Icon && <Icon className="mr-2 text-gray-500" />}{" "}
        {/* Render the icon if provided */}
        <label className="text-gray-700">{label}</label>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default InputField;
