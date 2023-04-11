import { useState, FC } from 'react';
import AudioField from '@app/components/audioField';
import AnimatedSelect from '@app/components/selectField';
import TextareaField from '@app/components/textareaField';
import styles from "./index.module.scss"
import { Col, Container, Row } from 'react-bootstrap';

const options = [
    { value: 'Text', label: 'Text' },
    { value: 'Audio', label: 'Audio' },
    { value: 'Video', label: 'Video' },
    { value: 'Image', label: 'Image' },
    { value: 'File', label: 'File' },
]

export const Generator: FC = () => {
    const [selectedInputOption, setSelectedInputOption] = useState<String>('');
    const [selectedOutputOption, setSelectedOutputOption] = useState<String>('');

    const handleInputOptionChange = (option: String) => {
        console.log(`Selected Input option: ${option}`);
        setSelectedInputOption(option);
    };
    const handleOutputOptionChange = (option: String) => {
        console.log(`Selected Output option: ${option}`);
        setSelectedOutputOption(option);
    }

    const handleUploadAudio = (data: File | String) => {
        console.log("data: ", data);
    };
    const handleText = (text: String) => {
        console.log(text)
    }
    return (
        <div className={styles['home-container']}>

            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                        <AnimatedSelect options={options} label='Input' onSelect={handleInputOptionChange} />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                        <AnimatedSelect options={options} label='Output' onSelect={handleOutputOptionChange} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {selectedInputOption === 'Text' && (
                        <TextareaField onChange={handleText} />
                    )}
                    {selectedInputOption === 'Audio' && (
                        <AudioField onUpload={handleUploadAudio} />
                    )}
                    {/* <AudioField1 /> */}
                    {/*

            {selectedInputOption === 'Video' && (
                <Form.Group>
                    <Form.Label>Upload video file</Form.Label>
                    <Form.Control id="video-file" />
                </Form.Group>
            )}

            {selectedInputOption === 'Image' && (
                <Form.Group>
                    <Form.Label>Upload image file</Form.Label>
                    <Form.Control id="image-file" multiple />
                </Form.Group>
            )}

            {selectedInputOption === 'File' && (
                <Form.Group>
                    <Form.Label>Upload file</Form.Label>
                    <Form.Control id="custom-file" />
                </Form.Group>
            )} */}
                </Row>
            </Container>
        </div>
    );

}