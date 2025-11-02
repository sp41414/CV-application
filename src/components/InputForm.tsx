import type { Data } from "./CV";
import EducationInfoForm from "./EducationInfoForm";
import PracticalInfoForm from "./PracticalInfoForm";
import GeneralInfoForm from "./GeneralInfoForm";
interface InputFormProps {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}

export default function InputForm({ data, setData }: InputFormProps) {
  return (
    <form>
      <GeneralInfoForm
        generalInfo={data.generalInfo}
        setGeneralInfo={(generalInfo: Data["generalInfo"]) =>
          setData((prev) => ({ ...prev, generalInfo }))
        }
      />
      <EducationInfoForm
        educationInfo={data.educationInfo}
        setEducationInfo={(educationInfo: Data["educationInfo"]) =>
          setData((prev) => ({ ...prev, educationInfo }))
        }
      />
      <PracticalInfoForm
        practicalInfo={data.practicalInfo}
        setPracticalInfo={(practicalInfo: Data["practicalInfo"]) =>
          setData((prev) => ({ ...prev, practicalInfo }))
        }
      />
    </form>
  );
}
