

export function getFileType(file: File | null) {
   let fileType: string | undefined = file?.type;
   console.log('Initial file type:', fileType);
   // Convert file type to a more readable format
   switch (fileType) {
      case 'image/jpeg':
         fileType = 'image/jpeg';
         break;
      case 'image/png':
         fileType = 'image/png';
         break;
      case 'application/pdf':
         fileType = 'application/pdf';
         break;
      case 'video/mp4':
         fileType = 'video/mp4';
         break;
      case 'application/msword':
         fileType = 'application/msword';
         break;
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
         fileType = 'other/docx';
         break;
      case 'application/vnd.ms-powerpoint':
         fileType = 'other/ppt';
         break;
      case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
         fileType = 'other/pptx';
         break;
      case 'application/vnd.ms-excel':
         fileType = 'application/xls';
         break;
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
         fileType = 'application/xlsx';
         break;
      default:
         fileType = 'Other/Other';
         break;
   }
   console.log('Final file type:', fileType);
   return fileType;
}

export function getFileTypeClass(type: string) {
   console.log(type)
   switch (type) {
      case 'image/jpeg':
         return '#3b82f6';
      case 'image/png':
         return '#22c55e';
      case 'application/pdf':
         return '#ef4444';
      case 'video/mp4':
         return '#a855f7';
      case 'application/msword':
      case 'other/docx':
         return '#1d4ed8';
      case 'other/ppt':
      case 'other/pptx':
         return '#f97316';
      case 'application/xls':
      case 'application/xlsx':
         return '#15803d';
      default:
         return '#6b7280';
   }
}

export function getFileSizeString(size: number) {
   if (size >= 1024 * 1024) {
      return (size / (1024 * 1024)).toFixed(2) + ' MB'; // Convert size to MB
   } else {
      return (size / 1024).toFixed(2) + ' KB'; // Convert size to KB
   }
}
