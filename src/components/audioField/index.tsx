import { useState } from 'react';
import { FaMicrophone, FaUpload } from 'react-icons/fa';
import styles from './audio.module.scss'


interface Props {
    label?: string;
    onUpload: (file: File | String) => void;
}
const AudioField: React.FC<Props> = ({ label, onUpload }) => {
    const ReactMicComponent = typeof window !== "undefined" ? require("react-mic").ReactMic : null;

    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [recordingName, setRecordingName] = useState("")


    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setRecordingName("")
            setAudioURL("")
            setSelectedFile(file);
        }
    };

    const handleUpload = () => {
        setTimeout(() => {
            onUpload(selectedFile ? selectedFile : audioURL)
        }, 1000)
        setSelectedFile(null)
        setAudioURL("")
        setRecordingName("")
        setIsRecording(false)
    }

    const onStartRecording = () => {
        setIsRecording(true);
    };

    const onStopRecording = () => {
        setIsRecording(false);
    };

    return (
        <div className={styles["audio-field"]}>

            {!isRecording && (
                <div className={styles["audio-input"]}>
                    {/* {!audioURL && */}
                    <>
                        <label htmlFor="audio-file-input" className={styles["audio-label"]}>
                            {selectedFile ? selectedFile.name : !recordingName && 'Click to select a file'}
                            {!selectedFile && recordingName && recordingName}
                        </label>
                        <input
                            type="file"
                            id="audio-file-input"
                            accept="audio/*"
                            onChange={handleFileSelect}
                        />
                    </>
                    {/* } */}
                    <button className={styles["audio-upload"]} onClick={handleUpload} disabled={!selectedFile && !audioURL}>
                        <FaUpload />
                    </button>
                </div>
            )}
            {!isRecording && <div className={styles.or}>OR</div>}
            <div className={styles["audio-record"]}>
                {audioURL && !isRecording && <audio src={audioURL} controls />}
                <>
                    <ReactMicComponent
                        record={isRecording}
                        onStop={(e: any) => {
                            setAudioURL(e.blobURL);
                            setSelectedFile(null)
                            setRecordingName("recording")
                            onStopRecording
                        }}
                        onStart={onStartRecording}
                        strokeColor="#4289e1"
                        backgroundColor="#f3f3f3"
                        className={isRecording ? styles["react-mic--visible"] : styles['mic-recording']}
                        visualSetting="sinewave"
                    />
                    {isRecording && <button className={styles["audio-stop-record"]} onClick={onStopRecording}>
                        <FaMicrophone />
                    </button>}
                </>
                {/* )} */}
                {!isRecording &&
                    <button className={styles["audio-start-record"]} onClick={onStartRecording}>
                        <FaMicrophone />
                    </button>
                }
            </div>
        </div >
    );
};

export default AudioField;