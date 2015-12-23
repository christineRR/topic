var React = require('react');
var ReactDOM = require('react-dom');
var ajax = require('./ajax');
require('./tab.css');

var Tab = React.createClass({
    getInitialState:function(){
        return {showItem:'',active:this.props.showItem}
    },

    componentWillMount: function() {
        this.getData(this.props.url+'/'+this.props.showItem+'.json');
    },

    getData:function(url){
        ajax({
            url:url,
            dataType:'json',
            success:(result)=>{
                console.log(JSON.parse(result));
                var item = JSON.parse(result);
                if (this.isMounted()) {
                    this.setState({showItem:item.text});
                }

            }
        });
    },

    clickHandler:function(item){
        this.getData(this.props.url+'/'+item+'.json');
        this.setState({active:item});
    },

    render:function(){

        var tabNavNodes = this.props.tabs.map(function(item,i){
            return (
                <li key={i} style={{width:1/(this.props.tabs.length) * 100 + "%"}} onClick={this.clickHandler.bind(this,item)} className={(this.state.active == item? 'active':'')}>{item}</li>
            );

        },this);
        return (
            <div>
                <ul className="tabWrap">
                    {tabNavNodes}
                </ul>
                <div className="tabContent">
                    {this.state.showItem}
                </div>
            </div>
        )
    }
})

ReactDOM.render(<Tab url="./data" showItem="tab1" tabs={['tab1','tab2','tab3']}/>,document.getElementById("container"));