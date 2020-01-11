import React from 'react'
import PropTypes from 'prop-types'
import { withPage, randomBetween } from '../utils'
import { Box, Feed } from '../components'

const VectorsPage = ({ items = [] }) => (
  <Box p={5}>
    <Feed space={5} grid={6} column={{ all: 6, sm: 3 }}>
      {items.map((item, index) => (
        <Feed.Item key={index}>
          <Box ratio={item.ratio} bg='pink05' />
        </Feed.Item>
      ))}
    </Feed>
  </Box>
)

VectorsPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ratio: PropTypes.number,
    })
  ),
}

VectorsPage.getData = async () => {
  const items = Array.from({ length: 10 }, () => ({
    ratio: randomBetween(9 / 16, 16 / 9),
  }))

  return { items }
}

export default withPage(VectorsPage)
