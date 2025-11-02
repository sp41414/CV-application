interface InputProps {
  label: string;
  value: string | number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name: string;
}

export default function Input({
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  name,
}: InputProps) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}
