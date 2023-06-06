import {Component} from 'react'
import './index.css'

class List extends Component {
  render() {
    const {details, deleteUser} = this.props
    const {timeAccessed, logoUrl, title, domainUrl, id} = details
    const onDelete = () => {
      deleteUser(id)
    }
    return (
      <div className="boxx">
        <div className="inner">
          <p className="heading">{timeAccessed}</p>
          <img src={logoUrl} className="image" alt="app logo" />
          <p className="heading">{title}</p>
          <p className="heading">{domainUrl}</p>
        </div>
        <div>
          <button className="button" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
              onClick={onDelete}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default List
