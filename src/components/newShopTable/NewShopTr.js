import React, {PureComponent} from 'react';


// class Option extends PureComponent {
//     render() {
//         const { name, onDelete }= this.props;
//         return (
//             <div className="cell" >
//                 <div className="cell__child-container">
//                     <Link to={`update/${name}`}><span>修改</span></Link>&nbsp;| &nbsp;
//                     <Link to={`copy/${name}`}><span>复制</span></Link>&nbsp;| &nbsp;
//                     <span onClick={() => onDelete(name)}>删除</span>
//                 </div>
//             </div>
//         )
//     }
// }

class Option extends PureComponent {
    render() {
        const { name, onDelete, onCopy, onEdit }= this.props;
        return (
            <div className="cell" >
                <div className="cell__child-container">
                    <span onClick={() => onEdit(name)}>修改</span>&nbsp;| &nbsp;
                    <span onClick={() => onCopy(name)}>复制</span>&nbsp;| &nbsp;
                    <span onClick={() => onDelete(name)}>删除</span>
                </div>
            </div>
        )
    }
}


export default class NewShopTr extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onCopy = this.onCopy.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.checkSingle = this.checkSingle.bind(this);
    };

    // // 接收两个参数，分别为待更新的属性及状态值
    // shouldComponentUpdate(nextProps, nextState) {
    //     // 如果当前的value值与待更新不相等，才执行更新
    //     return this.props.data.sold_num === nextProps.data.sold_num;
    // }

    handleBlur(e) {
        const value = e.target.value;
        this.setState({edit: false});
        const { onChange, data: { name: name } } = this.props;
        onChange && onChange(name, value);
    };
 
    handleClick() {
        this.setState({ edit: true });
    };

    onDelete(e) {
        const { data, onChange } = this.props;
        onChange && onChange({
            name: data.name,
            weight: e.target.value
        })

    }

    onCopy() {
        console.log('onCopy');
    }

    onEdit() {
        console.log('onEdit');
    }

    checkSingle() {
        console.log('checkSingle');
    }

    render() {
        const data = this.props.data;
        const { edit, value } = this.state;

        return (
            <div className="tr">
                <div className="cell">
                    <div className="cell__child-container">
                        <input type="checkbox" onClick={this.checkSingle}/>
                    </div>
                </div>
                <div className="cell">
                    <div className="cell__child-container">
                        <div>{data.name}</div>
                    </div>
                </div>
                <div className="cell">
                    <div className="cell__child-container">{data.age}</div>
                </div>
                <div className="cell cell--money cell--center">
                    <div className="cell__child-container">{data.height}</div>
                </div>
                <div className="cell">
                    <div className="cell__child-container">{edit ?
                        <input onBlur={this.handleBlur} defaultValue={data.weight}/> : data.weight}
                    </div>
                </div>
                <Option onDelete={this.onDelete} onCopy={this.onCopy} onEdit={this.onEdit} name={data.name}  />
            </div>
        );
    }
}