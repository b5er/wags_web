import React, { Component } from 'react'

import {compose, graphql} from 'react-apollo'
import {GET_ADOPT, SHOW_ADOPT} from '../../graphql/land'

class Adopt extends Component {

  constructor() {
    super()
    this.state = {
      //add
			name: '',
			gender: '',
			age: 0,
			breeds: [],
			description: '',
			petImage: null,

      submit: false
    }
  }


	addImage = async () => {
		try {
      let formData = new FormData()
      formData.append(this.state.petImage)
      formData.append(this.state.name)
      formData.append(this.state.gender)
      formData.append(this.state.age)
      formData.append(this.state.breeds)
      formData.append(this.state.description)

			const addStatus = await fetch('http://localhost:8000/api/pet/add', {
																	method: 'POST',
																	headers: {
																		'Accept': 'application/json',
																		'Content-Type': 'multipart/form-data'
																	},
																  body: formData
																})

			if (!addStatus.ok)
				console.error('Could not create a pet in the database. You are missing some fields.')
			//else //rerender somehow
		} catch(e) {
			console.log(e)
		}
	}

  render() {

    const { name, gender, age, breeds, description, petImage, submit} = this.state
    const { getAdopt, showAdopt} = this.props

    return (
      <div className = {`modal ${getAdopt.adopt ? 'is-active': ''}`}>
        <div
        className = "modal-background"
          onClick = {async e => {
            e.preventDefault()
            try {
              await showAdopt({variables: {adopt: false} })
            } catch(e) {
              console.log(e)
            }
            this.setState( {submit: false})
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
                        onSubmit = {e => {
                          e.preventDefault()
                          this.setState({ submit: true })
                          if (!name)
                            return
                        }}
                      >

                      <div className="field">
                        <label className="label has-text-isabelline">
                          Name
                        </label>
                        <div className="control">
                          <input
                            className={`input ${name.length > 0 ? 'is-success':''} ${submit && !name ? 'is-danger':''}`}
                            type ="text"
                            placeholder="Lil Pup"
                            onChange ={e => this.setState({name: e.target.value})}
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
                        <div class="select">

                          <div className="control">
                            <select onChange = {
                              e => {
                                var option = e.target.value;
                                this.setState({gender: option})
                              }}>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
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
                            className={`input ${gender.length > 0 ? 'is-success':''} ${submit && !age ? 'is-danger':''}`}
                            type ="text"
                            placeholder="70 Nigga"
                            onChange ={e => this.setState({age: e.target.value})}
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


                      <div class="select is-multiple">
                        <label className="label has-text-isabelline">
                          Breeds (Can select multiple) - Replace somehow
                        </label>
                        <select multiple size="2" onChange = {
                          e => {
                            var options = e.target.options;
                            var values = [];
                            for (var i = 0, l = options.length; i < l; i++) {
                              if (options[i].selected) {
                                console.log(options[i].value)
                                values.push(options[i].value);
                              }
                            }
                            this.setState({breeds: values})
                          }
                        }>
                          <option value="Argentina">Argentina</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Chile">Chile</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Uruguay">Uruguay</option>
                          <option value="Venezuela">Venezuela</option>
                        </select>
                      </div>

                      <div class="field">
                        <label className="label has-text-isabelline">
                          Description
                        </label>
                        <div class="control">
                          <textarea onChange = {
                            e => { this.setState({description: e.target.value}) }
                          } class="textarea is-primary" placeholder="Gucci gang gucci gang"></textarea>
                        </div>
                    </div>

                      <div class="field">
                        <div class="file is-primary">
                          <label class="file-label">
                            <input class="file-input" type="file" name="resume"
                             onChange ={e => {
                               this.setState({
                               petImage: e.target.files[0]
                             })

                              //TODO - Make it so that we check for errors and that we remove the C:/fakepath/ and just include the image for the post request
                            }}
                             value={petImage}
                             />
                            <span class="file-cta">
                              <span class="file-icon">
                                <i class="fas fa-upload"></i>
                              </span>
                              <span class="file-label">
                                Pet Image
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <button
                            className={`button is-link`}
                            onClick={e => {
                              if(!name)
                                return

                               {this.addImage()}
                            }}
                          >
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
