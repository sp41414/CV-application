import Input from "./Input";

type Data = {
  companyName: string;
  positionTitle: string;
  mainResponsibilities: string;
  dateFrom: string;
  dateTo: string;
};

interface PracticalInfoProps {
  practicalInfo: Data;
  setPracticalInfo: (practicalInfo: Data) => void;
}

export default function PracticalInfoForm({
  practicalInfo,
  setPracticalInfo,
}: PracticalInfoProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPracticalInfo({ ...practicalInfo, [name]: value });
  };

  return (
    <>
      <section>
        <Input
          label="Company Name"
          value={practicalInfo.companyName}
          onChange={handleChange}
          placeholder="Please enter your company name"
          name="companyName"
        />
        <Input
          label="Position Title"
          value={practicalInfo.positionTitle}
          onChange={handleChange}
          placeholder="Please enter your position title"
          name="positionTitle"
        />
        <div className="main-responsibilities-container">
          <label htmlFor="mainResponsibilities">Main Responsibilities</label>
          <textarea
            name="mainResponsibilities"
            id="mainResponsibilities"
            placeholder="Enter your main responsibilities"
            maxLength={300}
            onChange={handleChange}
          ></textarea>
        </div>
        <Input
          label="Worked From"
          value={practicalInfo.dateFrom}
          onChange={handleChange}
          type="date"
          name="dateFrom"
          placeholder="Enter date you worked from for the company"
        />
        <Input
          label="Worked To"
          value={practicalInfo.dateTo}
          onChange={handleChange}
          type="date"
          name="dateTo"
          placeholder="Enter date you worked to for the company"
        />
      </section>
    </>
  );
}
