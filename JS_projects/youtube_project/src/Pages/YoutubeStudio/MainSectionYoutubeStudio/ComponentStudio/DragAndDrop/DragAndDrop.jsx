import styles from './DragAndDrop.module.css'
import React, { useCallback, useState } from 'react'
// import {FeedbackImage} from '../SidebarStudio/SidebarComponents/SidebarOptionsFolder/SidebarOptions'
import CloseIcon from '@mui/icons-material/Close';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {useDropzone} from 'react-dropzone'
const DragAndDrop = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [prev, setPrev] = useState([]);
  const [showDragAndDrop,setShowDragAndDrop] =useState(true)

const onDrop=useCallback((fileAccepted)=>{
 setSelectedFiles(fileAccepted);
 const previewFiles= ()=> URL.createObjectURL( fileAccepted[0])
 setPrev(previewFiles)
},[])
const {getRootProps, getInputProps,isDragActive } = useDropzone({
    onDrop,
     accept: { 'image/*': [] },
    multiple:true
  })
  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
    // console.log(e.target.files)
    const file=new FileReader;
    file.onload =()=>{
setPrev(file.result)
    }
    file.readAsDataURL(e.target.files[0])
  };
  return (<>{
   showDragAndDrop&&( <div className={styles.dragAndDropSection}>
        <div className={styles.headDragAndDropSection}>
            <p className={styles.uploadParagraph}>Upload videos</p>
            <div className={styles.headBtnDragAndDrop}>
<FeedbackOutlinedIcon className={styles.imgDragAndDropHeader}/>
<div className="closeIconBtm" onClick={()=>setShowDragAndDrop(!showDragAndDrop)}>
<CloseIcon className={styles.imgDragAndDropHeader} />
</div>
</div>

        </div>
        <form action="" className={styles.formDragAndDrop}>
<div className={styles.uploadSection}>
<FileUploadIcon className={styles.fileUploadIcon}/>
</div>
    <p>Drag and drop video files to upload</p>
    <p>Your videos will be private until you publish them.</p>

{/* <div className="btnSelectFile">
    <input type="file" placeholder='Select files'/>
</div> */}
<div className={styles.customFileButton}>
          {selectedFiles ? ` files selected` : 'Select files'}
          <input 
            type="file" 
            className={styles.hiddenFileInput}
            onChange={handleFileChange}
            multiple
          />
          <img src={prev} alt="" />
          {/* <p>{selectedFiles[0].name}</p> */}
        </div>
          <div {...getRootProps()}>
      <input {...getInputProps()} />
   {isDragActive?(<p>Drop the files here...</p>)  :( <p>Drag 'n' drop some files here, or click to select files</p>)}
    </div>
            <p className={styles.uploadParagraph}>Upload videos</p>

        <div className={styles.buttomSection}>
            <p>By submitting your videos to YouTube, you acknowledge that you agree to YouTube's
                 &nbsp;<a href="">Term of Service</a>
                 &nbsp;and &nbsp;
                <a href="">Community Guide</a>
            </p>
      <p>Please be sure not to violate others' copyright or privacy rights.&nbsp; 
        <a href="">Learn more</a>
      </p>
        </div>
        </form>
    </div>)
}
</>)}

export default DragAndDrop