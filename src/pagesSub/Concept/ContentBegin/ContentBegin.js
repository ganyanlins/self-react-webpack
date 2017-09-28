import React, {Component} from 'react';


class ContentLists extends Component {
    render() {
        return(
            <div className="nav-item">
                reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state ==>
                <a href="http://cn.redux.js.org/docs/basics/Reducers.html">[reducers 概念链接]</a>
            </div>
        )
    }
}

class ContentBegin extends Component {
    render() {
        return(
            <div>
                <h2>高级指引内容</h2>
                <ContentLists />
            </div>
        )
    }
}

export default ContentBegin;