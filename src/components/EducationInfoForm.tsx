import Input from "./Input";

type Data = {
  schoolName: string;
  titleOfStudy: string;
  dateOfStudy: string;
};

interface EducationInfoProps {
  educationInfo: Data;
  setEducationInfo: React.Dispatch<React.SetStateAction<Data>>;
}

export default function EducationInfoForm({
  educationInfo,
  setEducationInfo,
}: EducationInfoProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducationInfo({ ...educationInfo, [name]: value });
  };
  return (
    <>
      <section>
        <Input
          label="School Name"
          value={educationInfo.schoolName}
          onChange={handleChange}
          placeholder="Please enter your school name"
          name="schoolName"
        />
        <Input
          label="Title Of Study"
          value={educationInfo.titleOfStudy}
          onChange={handleChange}
          placeholder="Please enter your title of study"
          name="titleOfStudy"
        />
        <Input
          label="Date of Study"
          value={educationInfo.dateOfStudy}
          onChange={handleChange}
          placeholder="Please enter your date of study"
          name="dateOfStudy"
          type="date"
        />
      </section>
    </>
  );
}
