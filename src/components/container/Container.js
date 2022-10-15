// import styles from './Container.module.css'
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div>{children}</div>
)

Container.Proptyper = {
  children: PropTypes.node,
}
export default Container
