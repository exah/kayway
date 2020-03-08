import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text, Link } from 'pss-components'
import { groupPropType } from '../prop-types'
import { Projects } from './Projects'

export const Group = ({ space = { all: 2, sm: 3, md: 4, lg: 5 }, value }) => (
  <Box id={value.slug}>
    {value.showTitle && (
      <Link href={`#${value.slug}`}>
        <Text as='h3' pt={5} mb={4} mx={space} variant='title'>
          {value.title}
        </Text>
      </Link>
    )}
    <Projects space={space} value={value.projects} columns={value.columns} />
  </Box>
)

Group.propTypes = {
  space: PropTypes.objectOf(PropTypes.number),
  value: groupPropType,
}
