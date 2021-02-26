import React, { useState } from 'react'
import { storage } from '../../../services/firebase';
import styled from 'styled-components'
import { useConfiguration } from '../../../globalContext/ConfigurationContext';
import { useTranslation } from 'react-i18next';
import UploadIcon from '../../../assets/icons/uploadIcon.svg'


const LogoSectionWrapper = styled.div`
    display:flex;
    align-items:center;

`

const LogoHolder = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    height:67px;
    width:67px;
    font-size:37px;
    border-radius:999px;
    position:relative;
    background: ${props => props.image ? `url(${props.image})` : '#343C4A'};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const RemovePict = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#ff00a53d;
    border-radius:999px;
    position:absolute;
    top:0px;
    right:0px;
    height:20px;
    width:20px;
    font-size:25px;
    color:black;
    cursor: pointer;
    border:1px solid white;
    &:hover{
        background-color:red;
        color:white;
        border:none;
        }

`
const ImageUploader = styled.label`
    margin-left:13px;
    width:105px;
    height:32px;
    border-radius:5px;
    border:1px solid gray;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    color:#00000080;
    font-size:14px;
    &:hover{
        border-color:#48B5FE;
        box-shadow:0px 0px 5px #48B5FE;
    }
`
const UploadIconDiv = styled.div`
    height:13px;
    width:13px;
    margin-right:8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${props => props.src});
`

export default function LogoSection() {

    const { t } = useTranslation();
    const { setImageAsUrl } = useConfiguration()

    const [imagePreview, setImagePreview] = useState('')
    const [imageName, setImageName] = useState('')


    const handleImageAsFile = (e) => {

        const image = e.target.files[0]
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (image?.name?.match(allowedExtensions) && image.size > 10000 && image.size < 5000000) {


            const reader = new FileReader();

            reader.readAsDataURL(image);

            // We Place the logo quickly for best UX
            reader.onload = function () {
                setImagePreview(reader.result)
            };

            //Making Unique the fileName
            const imageTitle = Date.now() + '_' + image.name
            setImageName(imageTitle)

            const uploadTask = storage.ref(`/images/${imageTitle}`).put(image)

            uploadTask.on('state_changed', null, null, () => {
                storage.ref('images').child(imageTitle).getDownloadURL()
                    .then(fireBaseUrl => {
                        setImageAsUrl(fireBaseUrl)
                    })
            })
        }
    }



    const RemoveImage = () => {
        setImagePreview('')
        setImageAsUrl('')

        const imageToDelete = storage.ref('images').child(imageName);


        imageToDelete.delete().then(function () {
            setImageName('')
        })

    }

    return (
        <LogoSectionWrapper>
            <LogoHolder image={imagePreview}>
                {!imagePreview ? "B" : ""}
                {imagePreview && <RemovePict onClick={RemoveImage} > &times; </RemovePict>}
            </LogoHolder>


            <ImageUploader htmlFor="LogoUpload"> <UploadIconDiv src={UploadIcon} /> {t('UploadLogo')} </ImageUploader>

            <input type="file" hidden id="LogoUpload"
                accept=".png, .jpg, .jpeg .gif"
                onChange={handleImageAsFile}
            />
        </LogoSectionWrapper>
    )
}
