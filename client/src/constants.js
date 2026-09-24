import profilePhoto from './assets/profile.png';

export const PROFILE_IMAGE = profilePhoto;

const RESUME_FILE_ID = "1mvJ51EXrz5GJV3m9pNTrtzPmQ8nrGFdB";

// Opens Google Drive resume link provided by the user
export const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view?usp=drivesdk`;

// Triggers direct file download
export const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

// Alias so any component still importing RESUME_URL keeps working.
export const RESUME_URL = RESUME_VIEW_URL;
export const LINKEDIN_URL = "https://www.linkedin.com/in/harshavardhan-kummetha-69089228a/";
export const GITHUB_URL = "https://github.com/KummethaHarshavardhan";
export const EMAIL = "harshakummetha78@gmail.com";
