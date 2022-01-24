import TranFilterBox from '../../../shared/components/tranFilterBox';
import TranHisTable from './tranHisTable'
import './tranHistory.scss'

function TranHistory() {
    return (
        <div className="tran_container">

            <div className="tran_header_box">
                <h1 className='tran_header'>Transaction History</h1>
                <button>Crypto</button>
            </div>

            <TranFilterBox />

            <div className="export_link">
                <i class="fas fa-external-link-alt"></i>
                <span>Export Withdraw History</span>
            </div>

            <TranHisTable />
        </div>
    )
}
export default TranHistory