import Header from './Header'

const MyLayout = props => (
  <div>
    <Header />
    {props.children}
  </div>
)

export default MyLayout
