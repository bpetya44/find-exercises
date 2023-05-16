import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import  BodyPartImage from '../assets/icons/weightlifting-50.png'
import  EquipmentImage from '../assets/icons/dumbbell-50.png'
import TargetImage from '../assets/icons/pushups-50.png'


const Detail = ({exerciseDetail}) => {
    const { name, bodyPart, equipment, target, gifUrl } = exerciseDetail;
    const extraDetail = [
        {
            name: 'bodyPart',
            image: BodyPartImage,
            value: bodyPart
        },
        {
            name: 'equipment',
            image: EquipmentImage,
            value: equipment
        },
        {
            name: 'target',
            image: TargetImage,
            value: target
        }
    ]

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack gap="20px" sx={{ width: { lg: "50%" } }}>
        <Typography variant="h3" textTransform="capitalize" color="#9c27b0">
          {name}
        </Typography>
        <Typography>
          Exercises keep you strong.
          <br /> {name} is a great exercise for your {target} muscles. <br /> It
          will help you gain the best shape of your {bodyPart}. <br /> You will
          need {equipment} to do it.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} gap="20px" direction="row" alignItems="center">
            <Button sx={{background: '#fff2db', borderRadius: "50%", width: '100px', height: '100px'}}>
              <img src={item.image} alt={bodyPart}/>
            </Button>
            <Typography variant="h5" color="#9c27b0" textTransform='capitalize'>
              {item.value}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Detail