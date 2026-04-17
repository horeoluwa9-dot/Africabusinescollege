
/**
 * Utility to trigger a mock PDF download
 */
export const downloadMockPdf = (title: string) => {
  const content = `
    AFRICA BUSINESS COLLEGE (ABC)
    ${title.toUpperCase()} PROSPECTUS 2026
    
    Vision: Architecting the future of African commerce.
    
    This document serves as the official prospectus/brochure for ABC.
    It contains institutional frameworks, program architectures, and 
    selection criteria for the 2026 cohort.
    
    Generated for you at: ${new Date().toLocaleString()}
  `;

  const blob = new Blob([content], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `ABC_${title.replace(/\s+/g, '_')}_2026.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
