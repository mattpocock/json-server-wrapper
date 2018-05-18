import React from 'react';
import FormInput from './components/FormInput';
import fetchFromAPI from './functions/fetchFromAPI';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [
                {
                    title: 'Title',
                    name: 'title',
                    value: '',
                },
                {
                    title: 'Author',
                    name: 'author',
                    value: '',
                },
            ],
            posts: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loadPosts = this.loadPosts.bind(this);
    }

    componentWillMount() {
        this.loadPosts();
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.inputs[0].value === '') return;
        if (this.state.inputs[1].value === '') return;
        fetchFromAPI(
            'POST',
            {
                title: this.state.inputs[0].value,
                author: this.state.inputs[1].value,
            },
        ).then(() => this.loadPosts());
    }

    handleChange(index, value) {
        this.state.inputs[index].value = value;
        this.forceUpdate();
    }

    loadPosts() {
        fetchFromAPI(
            'GET',
            {},
        ).then(json => this.setState({
            posts: json,
        }));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    {this.state.inputs.map((input, index) => (
                        <FormInput
                            key={index}
                            title={input.title}
                            name={input.name}
                            value={input.value}
                            handleChange={({ target }) => (
                                this.handleChange(index, target.value)
                            )}
                        />
                    ))}
                    <input type="submit" />
                </form>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Author
                            </th>
                        </tr>
                        {this.state.posts.map((post, index) => (
                            <tr
                                key={index}
                            >
                                <td>
                                    {post.title}
                                </td>
                                <td>
                                    {post.author}
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            fetchFromAPI(
                                                'DELETE',
                                                { id: post.id },
                                            ).then(() => {
                                                this.loadPosts();
                                            })
                                        }
                                    >
                                        Delete Entry
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

module.exports = App;
