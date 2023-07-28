import { Box, Typography } from '@mui/material'
import React from 'react'

const YoutubeVideos = ({youtubeVideos, name}) => {
  console.log(youtubeVideos)
  let contents
  if(youtubeVideos != {}){
    contents = youtubeVideos.contents
  }
  return (
    <>
      <Box width='90%' m='auto' mt='95px' p="5%" pt="50px" style={{backgroundColor: '#ffd4cd'}}>
        <Typography 
          style={{fontWeight: '600'}} variant='h5'>Watch <span style={{textTransform: 'capitalize', color: '#E34033'}}>{name}</span> Excercise Videos</Typography>
        {contents?.slice(1, 3).map((video) => {
          return(
            // <Typography>{video.video.channelId}</Typography>
            <a 
              href={`https://www.youtube.com/watch?v=${video.video.videoId}`}>
                {/* {video.video.thumbnails[1]} */}
                {video.video.videoId} <br/>
              </a>
          )
          
        })}
      </Box>
    </>
  )
}

export default YoutubeVideos
