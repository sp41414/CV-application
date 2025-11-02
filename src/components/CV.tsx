type Data = {
  generalInfo: { name: string; email: string; phone: number };
  educationInfo: {
    schoolName: string;
    titleOfStudy: string;
    dateOfStudy: Date;
  };
  practicalInfo: {
    companyName: string;
    positionTitle: string;
    mainResponsibilities: string;
    dateFrom: Date;
    dateTo: Date;
  };
};
interface CVProps {
  data: Data;
}

export default function CV({ data }: CVProps) {
  return (
    <div className="cv">
      <h1>{data.generalInfo.name}</h1>
      <h2>Contact</h2>
      <p>
        <span className="bold">Email:</span> {data.generalInfo.email}
      </p>
      <p>
        <span className="bold">Phone Number:</span> {data.generalInfo.phone}{" "}
      </p>

      <h2>Education</h2>
      <p>
        <span className="bold">School:</span> {data.educationInfo.schoolName}
      </p>
      <p>
        <span className="bold">Title Of Study:</span>{" "}
        {data.educationInfo.titleOfStudy}
      </p>
      <p>
        <span className="bold">Date Of Study:</span>{" "}
        {data.educationInfo.dateOfStudy
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "/")}
      </p>

      <h2>Work Experience</h2>
      <p>
        <span className="bold">Company Name:</span>{" "}
        {data.practicalInfo.companyName}
      </p>
      <p>
        <span className="bold">Position Title:</span>
        {data.practicalInfo.positionTitle}
      </p>
      <p>
        <span className="bold">Main Responsibilities:</span>
      </p>
      <p>{data.practicalInfo.mainResponsibilities}</p>
      <p>
        Worked from{" "}
        {data.practicalInfo.dateFrom
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "/")}{" "}
        To{" "}
        {data.practicalInfo.dateTo
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "/")}
      </p>
    </div>
  );
}
