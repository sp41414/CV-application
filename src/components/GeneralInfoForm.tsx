import Input from "./Input";

type Data = {
  name: string;
  email: string;
  phone: string;
};
interface GeneralInfoProps {
  generalInfo: Data;
  setGeneralInfo: (generalInfo: Data) => void;
}

export default function GeneralInfoForm({
  generalInfo,
  setGeneralInfo,
}: GeneralInfoProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  };

  return (
    <>
      <section>
        <Input
          label="Full Name"
          value={generalInfo.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          name="name"
        />
        <Input
          label="Email"
          value={generalInfo.email}
          onChange={handleChange}
          placeholder="Enter your email, e.g. example@gmail.com"
          name="email"
        />
        <Input
          label="Phone Number"
          value={generalInfo.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          name="phone"
        />
      </section>
    </>
  );
}
