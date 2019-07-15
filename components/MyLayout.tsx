import Header from './Header'

const MyLayout: React.FC = props => (
  <div>
    <Header />
    {props.children}
  </div>
)

export default MyLayout
