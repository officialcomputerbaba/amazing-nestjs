import { JobType } from "../constants/jobs.constants";

export const JOBS = [
  {
    companyName: "Marval",
    title: "Dr. Strange",
    email: "abc@mail.com",
    type: JobType.FULL_TIME,
    experience: 4,
    salary: 450.65,
    tags: ["nodejs", "nestjs", "rest api"],
    isActive: true,
    refId: "d53284ea-9150-422e-895f-93917d3d9ab7", // UUID v4
    id: 4,
  },
  {
    companyName: "Sony",
    title: "Spiderman",
    email: "xyz@mail.com",
    type: JobType.PART_TIME,
    experience: 1,
    salary: 500.9,
    tags: ["java", "spring", "rest api"],
    isActive: false,
    refId: "6375de98-3dc4-3385-bf55-5c4434132c48", // UUID v3
    id: 11,
  },
];
