import React, { Component } from 'react'


class Adopt extends Component {

  constructor() {
    super()
    this.state = {
      pet: {
  			name: '',
  			gender: 'Male',
  			age: 1,
  			breeds: ['Poodle'],
  			description: '',
  			petImage: null
      },
      submit: false,
      complete: false
    }
  }

  isRightType = file => {
    const type = file ? file.type:null
    if (!type)
      return false

    const fileTypes = {
      j: ['j', 'p', 'e', 'g'],
      p: ['p', 'n', 'g'],
      g: ['g', 'i', 'f']
    }

    let typePtr = 0
    while (typePtr < type.length - 1) {
      if (typePtr > 0 && type[typePtr - 1] === '/')
        break
      typePtr++
    }

    if (!(type[typePtr] in fileTypes))
      return false

    const startMatch = type[typePtr]
    for (let i = 0; i < fileTypes[startMatch].length; i++) {
      if (fileTypes[startMatch][i] === type[typePtr])
        typePtr++
    }

    return typePtr === type.length
  }


	addImage = async submitButton => {
		try {

      const formData = new FormData()
      const { pet } = this.state

      for (let key in pet)
        formData.append(key, pet[key])

			const addStatus = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/pet`, {
																	method: 'POST',
																  body: formData
																})


			if (!addStatus.ok) {
        const { message } = await addStatus.json()
        if (message) {
            console.log(message)
        } else {
            console.error('Could not create a pet in the database. You are missing some fields.')
        }
        submitButton.classList.remove('is-loading')
        submitButton.classList.add('is-no')
        setTimeout(() => submitButton.classList.remove('is-no'), 400)
        return
      }

      setTimeout(() => {
        submitButton.classList.remove('is-loading')
        this.setState({ complete: true })
      }, 500)

    } catch(e) {
      submitButton.classList.remove('is-loading')
      submitButton.classList.add('is-no')
      setTimeout(() => submitButton.classList.remove('is-no'), 400)
			console.log(e)
		}
	}

  render() {

    const { pet, pet: { name, gender, age, breeds, description, petImage }, submit, complete } = this.state

    return (
      <div className={`modal ${false ? 'is-active': ''}`}>
        <div
          className="modal-background"
          onClick={async e => {
            e.preventDefault()
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
                          const submitButton = document.querySelector('#adopt-submit-button')

                          submitButton.classList.add('is-loading')
                          if(!name || !age || !description || !petImage) {
                            submitButton.classList.remove('is-loading')
                            submitButton.classList.add('is-no')
                            setTimeout(() => submitButton.classList.remove('is-no'), 400)
                            return
                          }

                          this.addImage(submitButton)
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
                          <div className={`file is-info ${petImage && petImage.name ? 'has-name':''}`}>
                            <label className="file-label">
                              <input
                                className="file-input"
                                type="file"
                                name="Pet Image"
                                onChange={e => {
                                  const pictureButton = document.querySelector('.file')
                                  if (!this.isRightType(e.target.files[0])) {
                                    pictureButton.classList.add('is-danger')
                                    pictureButton.classList.remove('is-info')
                                    pictureButton.classList.add('is-no')
                                    setTimeout(() => pictureButton.classList.remove('is-no'), 400)
                                    return
                                  }

                                  if (pictureButton.classList.contains('is-danger')) {
                                    pictureButton.classList.add('is-info')
                                    pictureButton.classList.remove('is-danger')
                                  }

                                  this.setState({ pet: { ...pet, petImage: e.target.files[0] } })
                                }}
                               />
                              <span className="file-cta">
                                <span className="file-icon">
                                  <i className="fas fa-upload" />
                                </span>
                                <span className="file-label">
                                  Picture
                                </span>
                              </span>
                              { petImage && petImage.name ?
                                  <span className="file-name is-isabelline has-text-pineapple">
                                    {petImage.name}
                                  </span>
                                  :
                                  null
                              }
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
                            { complete ?
                              (<span
                                 id="complete-notification"
                                 className="is-malachite-green is-small-rounded"
                               >
                                <i className="fas fa-check has-text-isabelline" />
                              </span>)
                              :
                              (<button
                                id="adopt-submit-button"
                                className="button is-link"
                              >
                                Submit
                              </button>)
                            }
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
          }}
        />
      </div>
    )
  }
}

export default Adopt
