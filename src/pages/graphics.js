import React from 'react'
import PropTypes from 'prop-types'
import { withPage, randomBetween } from '../utils'
import { Box, Feed } from '../components'

const GraphicsPage = ({ items = [] }) => (
  <Box p={5}>
    <Feed space={5} grid={6} column={{ all: 6, sm: 3 }}>
      {items.map((item, index) => (
        <Feed.Item key={index}>
          <Box ratio={item.ratio} bg='white' />
        </Feed.Item>
      ))}
    </Feed>
  </Box>
)

GraphicsPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ratio: PropTypes.number,
    })
  ),
}

GraphicsPage.getData = async () => {
  const items = Array.from({ length: 10 }, () => ({
    ratio: randomBetween(9 / 16, 16 / 9),
  }))

  return { items }
}

export default withPage(GraphicsPage)
