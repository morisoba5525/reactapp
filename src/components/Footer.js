/**
 * Created by morisoba on 2017/06/07.
 */
import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap'

const Footer = () => (
    <p>
        <ButtonGroup>
            <FilterLink filter="SHOW_ALL">
                <Button>All</Button>
            </FilterLink>
            <FilterLink filter="SHOW_ACTIVE">
                <Button>Active</Button>
            </FilterLink>
            <FilterLink filter="SHOW_COMPLETED">
                <Button>Completed</Button>
            </FilterLink>
        </ButtonGroup>
    </p>
)

export default Footer
