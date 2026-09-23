/** Canonical public assets — replace files and commit; deploy serves fresh copies via cache-bust. */
export const RESUME_FILE = "resume.pdf";
export const RESUME_DOWNLOAD_NAME = "Nagendra_Lankalapalli_Resume.pdf";
export const PROFILE_FILE = "profile.jpg";
export const LOGO_FILE = "lns-logo.png";

const asset = (file: string) =>
  `${import.meta.env.BASE_URL}${file}?v=${__BUILD_ID__}`;

export const RESUME_HREF = asset(RESUME_FILE);
export const PROFILE_HREF = asset(PROFILE_FILE);
export const LOGO_HREF = asset(LOGO_FILE);

export const LINKEDIN_HREF = "https://www.linkedin.com/in/nagendra-lankalapalli-6a7457236/";
export const GITHUB_HREF = "https://github.com/LvvNagendra";
export const ORGMITRA_HREF = "https://lvvnagendra.github.io/OrgMitraHQ/";
export const EMAIL = "lvvnagendra99@gmail.com";
export const PHONE_DISPLAY = "+91 88975 90280";
export const PHONE_HREF = "tel:+918897590280";

export const ROLE_TITLE = "Java Full Stack Developer";
export const ROLE_FOCUS = "React · Spring Boot · Payments & BFSI";
