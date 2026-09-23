/** Canonical resume: replace `public/resume.pdf` and commit — every deploy serves the new file. */
export const RESUME_FILE = "resume.pdf";
export const RESUME_DOWNLOAD_NAME = "Nagendra_Lankalapalli_Resume.pdf";

/** Cache-bust so browsers always fetch the PDF from the latest deploy. */
export const RESUME_HREF = `${import.meta.env.BASE_URL}${RESUME_FILE}?v=${__BUILD_ID__}`;

export const LINKEDIN_HREF = "https://www.linkedin.com/in/nagendra-lankalapalli-6a7457236/";
export const GITHUB_HREF = "https://github.com/LvvNagendra";
export const EMAIL = "lvvnagendra99@gmail.com";
export const PHONE_DISPLAY = "+91 88975 90280";
export const PHONE_HREF = "tel:+918897590280";
