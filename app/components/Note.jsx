import React from 'react';

export default class Note extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            editing:false
        };
    }

    render(){
        if(this.state.editing){
            return this.renderEdit();
        }
        
        return this.renderNote();
    }
    renderEdit = () =>{
        return <input type="text"
        ref={
            (e) => e ? e.selctionStart = this.props.task.length : null
        }
        
        autoFocus={true}
        defaultValue={this.props.task}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter} />;
    };
    
    renderNote = () =>{
        const onDelete = this.props.onDelete;
        
        return(
            <div className="task" onClick={this.edit}><span>{this.props.task}</span>{onDelete ? this.renderDelete():null} </div>
        );
        
    };
    renderDelete = () =>{
        return <button className="delete-note" onClick={this.props.onDelete}>x</button>;
    };
    edit = () =>{
        this.setState({editing:true});
    };

    checkEnter = (e) =>{
        if(e.key === 'Enter'){
            this.finishEdit(e);
        }
    };

    finishEdit = (e) =>{
        const value = e.target.value;
        
        if(this.props.onEdit){
            this.props.onEdit(value);
            this.setState({editing:false});
        }
    };


}



