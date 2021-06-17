const NEW_POST = "NEW-POST";
const UPDATE_POST_FUNCTION = "UPDATE-POST-FUNCTION";
const ADD_NEW_MASSAGE = "ADD-NEW-MASSAGE";
const SEND_MESSAGE = "SAND-MESSAGE";

let store = {
  State: {
    ProfileData: {
      PostsData: [
        { id: 1, textPost: "some text to call", likesCount: 11 },
        { id: 2, textPost: "another text to call", likesCount: 56 },
      ],
      NewPostContent: "Some text",
    },

    // getState() {
    //   return this._State;
    // },

    DialogsData: {
      dialogsData: [
        { id: 1, name: "Maria" },
        { id: 2, name: "Pavel" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Svetlana" },
        { id: 5, name: "Andrey" },
        { id: 6, name: "Kirill" },
        { id: 7, name: "Katya" },
      ],
      messagesData: [
        { id: 1, message: "first message" },
        { id: 2, message: "second text" },
        { id: 3, message: "some text to call" },
        { id: 4, message: "another text to call" },
        { id: 5, message: "and another text to call" },
      ],
      newMessageText: "111",
    },
  },

  _ObserberFunction() {
    console.log("some text");
  },

  CallBackFunction(observer) {
    this._ObserberFunction = observer;
  },

  dispatch(action) {
    if (action.type === "NEW-POST") {
      let newPost = {
        id: 3,
        Content: this.State.ProfileData.NewPostContent,
        likesCount: 0,
      };
      this.State.ProfileData.PostsData.push(newPost);
      this.State.ProfileData.NewPostContent = "";
      this._ObserberFunction(this.State);
    } else if (action.type === UPDATE_POST_FUNCTION) {
      this.State.ProfileData.NewPostContent = action.newContent;
      this._ObserberFunction(this.State);
    } else if (action.type === ADD_NEW_MASSAGE) {
      this.State.DialogsData.newMessageText = action.body;
      this._ObserberFunction(this.State);
    } else if (action.type === SEND_MESSAGE) {
      let body = this.State.DialogsData.newMessageText;
      this.State.DialogsData.newMessageText = "";
      this.State.DialogsData.messagesData.push({ id: 6, message: body });
      this._ObserberFunction(this.State);
    }
  },
};

export const NewPostActionCreator = () => ({ type: NEW_POST });
export const UpdateActionCreator = (PostContent) => ({
  type: UPDATE_POST_FUNCTION,
  newContent: PostContent,
});

export const NewMessageCreator = () => ({ type: SEND_MESSAGE });
export const UpdateMessageBodyCreator = (body) => ({
  type: UPDATE_POST_FUNCTION,
  body: body,
});

export default store;
window.store = store;
