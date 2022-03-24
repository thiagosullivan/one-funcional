import React from 'react'
import { OurTeamContainer, OurTeamContent, OurTeamSlider } from './styles'

function OurTeam() {
  return (
    <OurTeamContainer>
      <OurTeamContent>
        <h2>Our Team</h2>
        <p className='ourTeam__subtitle'>Meet with trainers</p>

        <OurTeamSlider>
          <p>Sed in mauris nulla. Donec sed lorem interdum, molestie libero in, pellentesque dui. Phasellus ultricies magna at est tincidunt, quis.</p>
        </OurTeamSlider>
      </OurTeamContent>
    </OurTeamContainer>
  )
}

export default OurTeam