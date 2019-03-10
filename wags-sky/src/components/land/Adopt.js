import React, { Component } from 'react'

import { compose, graphql } from 'react-apollo'
import { GET_ADOPT, SHOW_ADOPT } from '../../graphql/land'

class Adopt extends Component {

  constructor() {
    super()
    this.state = {
      pet: {
  			name: '',
  			gender: 'Male',
  			age: 1,
  			breeds: [''],
  			description: '',
  			petImage: null
      },
      submit: false
    }
  }


	addImage = async () => {
		try {

      const formData = new FormData()
      const { pet } = this.state

      for (let key in pet)
        formData.append(key, pet[key])

			const addStatus = await fetch('http://localhost:8000/api/pet', {
																	method: 'PUT',
																  body: formData
																})


			if (!addStatus.ok)
				console.error('Could not create a pet in the database. You are missing some fields.')
			  //TODO: add animation or user-friendly error
		} catch(e) {
      //TODO: add animation or user-friendly error
			console.log(e)
		}
	}

  render() {

    const { pet, pet: { name, gender, age, breeds, description, petImage }, submit } = this.state
    const { getAdopt, showAdopt } = this.props

    return (
      <div className={`modal ${getAdopt.adopt ? 'is-active': ''}`}>
        <div
          className="modal-background"
          onClick={async e => {
            e.preventDefault()
            try {
              await showAdopt({ variables: { adopt: false } })
            } catch(e) {
              //TODO: add animation or user-friendly error
              console.log(e)
            }
            this.setState({ submit: false })
          }}
        />
        <div className="modal-content">
          <div className="card is-pineapple is-small-rounded">
              <div className="card-header modal-header">
                <h1 className="title has-text-pineapple">
                  Submit a pet to adopt
                </h1>
              </div>

              <div className="card-content">
                  <div className="columns is-centered">
                    <div className="column is-8">
                      <form
                        id="adopt-form"
                        onSubmit={e => {
                          e.preventDefault()
                          this.setState({ submit: true })

                          if(!name || !age || !description || !petImage)
                            return // TODO: animation letting user know that it did't go through
                          this.addImage()
                        }}
                      >

                        <div className="field">
                          <label className="label has-text-isabelline">
                            Name
                          </label>
                          <div className="control">
                            <input
                              className={`input ${name.length > 0 ? 'is-success':''} ${submit && !name ? 'is-danger':''}`}
                              type="text"
                              onChange={e => this.setState({ pet: { ...pet, name: e.target.value } })}
                              value={name}
                            />
                          </div>
                          {
                            submit && !name ?
                            <p className="help is-danger">
                              A name is required
                            </p>
                            :
                            null
                          }
                        </div>

                        <div className="field">
                          <label className="label has-text-isabelline">
                            Gender
                          </label>
                          <div className="control">
                            <div className={`select ${submit && gender.length > 0 ? 'is-success':''}`}>
                              <select
                                onChange={e => { this.setState({ pet: { ...pet, gender: e.target.value } }) }}
                              >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Unknown</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="field">
                          <label className="label has-text-isabelline">
                            Age
                          </label>
                          <div className="control">
                            <input
                              className={`input ${submit && age ? 'is-success':''} ${submit && !age ? 'is-danger':''}`}
                              type="text"
                              onChange={e => this.setState({ pet: { ...pet, age: e.target.value } })}
                              value={age}
                            />
                          </div>
                          {
                            submit && !age ?
                            <p className="help is-danger">
                              An age is required
                            </p>
                            :
                            null
                          }
                        </div>


                        <div className="field">
                          <label className="label has-text-isabelline">
                            Breeds
                          </label>
                          <div className="control">
                            <div className={`select ${submit && breeds.length > 0 ? 'is-success':''}`}>
                              <select
                                onChange={e => {
                                    const options = e.target.options
                                    let values = []
                                    for (let i = 0; i < options.length; i++) {
                                      if (options[i].selected)
                                        values.push(options[i].value)
                                    }
                                    this.setState({ pet: { ...pet, breeds: values } })
                                }}
                              >
                                <option value="Poodle">Poodle</option>
                                <option value="Golden Retriever">Golden Retriever</option>
                                <option value="Shitzu">Shitzu</option>
                                <option value="Nova Scotia Duck Tolling Retriever">Nova Scotia Duck Tolling Retriever</option>
                                <option value="Cane Corso">Cane Corso</option>
                                <option value="American Bulldog">American Bulldog</option>
                                <option value="American Staffordshire Terrier">American Staffordshire Terrier</option>
                                <option value="Dalmation">Dalmation</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="field">
                          <label className="label has-text-isabelline">
                            Description
                          </label>
                          <div className="control">
                            <textarea
                              className={`textarea ${description.length > 0 ? 'is-success':''}`}
                              onChange={e => { this.setState({ pet: { ...pet, description: e.target.value } }) }}
                              value={description}
                            />
                          </div>
                          {
                            submit && !description ?
                            <p className="help is-danger">
                              A description is required
                            </p>
                            :
                            null
                          }
                        </div>

                        <div className="field">
                          <div className="file is-primary">
                            <label className="file-label">
                              <input
                                className="file-input"
                                type="file"
                                name="Pet Image"
                                onChange={e => {
                                  // TODO: Check if file is .jpg, .png or .gif. Don't update petImage state if not right file.
                                  this.setState({ pet: { ...pet, petImage: e.target.files[0] } })
                                }}
                               />
                              <span className="file-cta">
                                <span className="file-icon">
                                  <i className="fas fa-upload" />
                                </span>
                                <span className="file-label">
                                  Pet Image
                                </span>
                              </span>
                            </label>
                          </div>
                          {
                            submit && !petImage ?
                            <p className="help is-danger">
                              A picture is required
                            </p>
                            :
                            null
                          }
                        </div>

                        <div className="field">
                          <div className="control">
                            <button className={`button is-link`}>
                              Submit
                            </button>
                          </div>
                        </div>

                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>


        <button
          className="modal-close is-large" aria-label="close"
          onClick={async e => {
            e.preventDefault()
            try {
              await showAdopt({ variables: { adopt: false } })
            } catch(e) {
              //TODO: add animation or user-friendly error
              console.log(e)
            }
          }}
        />
      </div>
    )
  }
}

export default compose(
  graphql(SHOW_ADOPT, { name: 'showAdopt' }),
  graphql(GET_ADOPT, { name: 'getAdopt' })
)(Adopt)
