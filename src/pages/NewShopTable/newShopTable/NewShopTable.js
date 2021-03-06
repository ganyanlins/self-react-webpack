import React, {Component} from 'react';
import NewShopTr from './NewShopTr';
import CheckboxAll from './CheckboxAll';
import EventEmitter from './EventEmitter';
import PropTypes from 'prop-types';

let obj = {};

export default class NewShopTable extends Component {
    constructor(props) {
        super(props);

        this.checkAll = this.checkAll.bind(this);
        this.deletes = this.deletes.bind(this);
        this.copyMany = this.copyMany.bind(this);
        this.onCheckSingle = this.onCheckSingle.bind(this);
    }

    onCheckSingle = (info, infoItem) => {
        const {data} = this.props;
        obj = info;
        let selectAll = true;
        data.map(v => {
            if (!v.select) {
                selectAll = false;
            }
        })
        infoItem.select && selectAll ?
            EventEmitter.dispatch('changeItem', true) :
            EventEmitter.dispatch('changeItem', false);
    };

    deletes = () => {
        this.o = false;
        this.props.data.map(d => {
             if (obj[d.id]) {
                 this.o = true;
             }
        })
        this.o ? this.props.deletes(obj) : this.props.deletes({});
    }

    copyMany() {
        const { copyMany, data } = this.props;
        let copyDataArr = new Array();
        data.map(d => d.select ? copyDataArr.push(d) : '')
        copyMany && copyMany(copyDataArr);
    }

    checkAll = (checked) => {
        obj = {};
        let { checkBox, data } = this.props;
        data.map(dt => dt.select = checked);
        data.map(dt => dt.select ? obj[dt.id] = dt.id : '')
        checkBox(data);

    }

    render() {
        const { onEdit, onCopy, onDelete, add, data } = this.props;
        return (
            <div className="zent-table ">
                <div className="thead">
                    <div className="stickrow tr">
                        <div className="cell">
                            {/*<div className="cell__child-container">*/}
                                {/*<input type="checkbox" onClick={this.checkAll}/>*/}
                            {/*</div>*/}
                            <CheckboxAll
                                handleCheckboxAllChange={this.checkAll} />
                        </div>
                        <div className="cell">
                            <div className="cell__child-container">姓名</div>
                        </div>
                        <div className="cell" >
                            <div className="cell__child-container">
                                <a>年龄</a>
                            </div>
                        </div>
                        <div
                            className="cell cell--money cell--center"
                            >
                            <div className="cell__child-container">
                                <a>身高<span className="desc"></span>
                                </a>
                            </div>
                        </div>
                        <div className="cell" >
                            <div className="cell__child-container">
                                <a>体重</a>
                            </div>
                        </div>
                        <div className="cell" >
                            <div className="cell__child-container">
                                <a>操作</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tbody">
                    {data.map(i => <NewShopTr
                                            onEdit={onEdit}
                                            onCopy={onCopy}
                                            onDelete={onDelete}
                                            onCheckSingle={this.onCheckSingle}
                                            key={i.id}
                                            obj={obj}
                                            data={i} />)}
                </div>
                <div className="button">
                    <button onClick={add}>add</button>
                    <button onClick={this.deletes}>deletes</button>
                    <button onClick={this.copyMany}>copyMany</button>
                </div>
            </div>
        );
    }
}

NewShopTable.propTypes = {
    isCheckedAll: PropTypes.bool
};

