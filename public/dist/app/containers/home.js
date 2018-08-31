import * as tslib_1 from "tslib";
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
var Home = /** @class */ (function (_super) {
    tslib_1.__extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        var allurbaserbelongtous = this.props.allurbaserbelongtous;
        return (React.createElement("div", null,
            React.createElement("h1", null, "Home! \uD83C\uDFE0"),
            React.createElement("div", null,
                "Allurbaserbelongtous:",
                React.createElement("strong", null, allurbaserbelongtous))));
    };
    return Home;
}(PureComponent));
function mapStateToProps(state) {
    return {
        allurbaserbelongtous: state.appState.get('allurbaserbelongtous'),
    };
}
export default connect(mapStateToProps)(Home);
//# sourceMappingURL=home.js.map