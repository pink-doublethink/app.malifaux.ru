import type { NextPage } from "next";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container title="Dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card card-stats">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </div>
                  <div className="col-xs-7">
                    <div className="numbers">
                      <p className="card-category">Number</p>
                      <h4 className="card-title">150GB</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-stats">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </div>
                  <div className="col-xs-7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <h4 className="card-title">$ 1,345</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-stats">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </div>
                  <div className="col-xs-7">
                    <div className="numbers">
                      <p className="card-category">Errors</p>
                      <h4 className="card-title">23</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="card card-stats">
          <div className="card-body">
            <div className="row">
              <div className="col-xs-5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-favourite-28 text-primary"></i>
                </div>
              </div>
              <div className="col-xs-7">
                <div className="numbers">
                  <p className="card-category">Followers</p>
                  <h4 className="card-title">+45K</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <hr></hr>
            <div className="stats">
              <i className="fas fa-redo mr-1"></i>
              Update now
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Users Behavior</h4>
              <p className="card-category">24 Hours performance</p>
            </div>
            <div className="card-body">
              <div className="ct-chart" id="chartHours">
                {/* Insert ChartistGraph component here */}
              </div>
            </div>
            <div className="card-footer">
              <div className="legend">
                <i className="fas fa-circle text-info"></i>
                Open <i className="fas fa-circle text-danger"></i>
                Click <i className="fas fa-circle text-warning"></i>
                Click Second Time
              </div>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-history"></i>
                Updated 3 minutes ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Email Statistics</h4>
              <p className="card-category">Last Campaign Performance</p>
            </div>
            <div className="card-body">
              <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
                {/* Insert ChartistGraph component here */}
              </div>
              <div className="legend">
                <i className="fas fa-circle text-info"></i>
                Open <i className="fas fa-circle text-danger"></i>
                Bounce <i className="fas fa-circle text-warning"></i>
                Unsubscribe
              </div>
              <hr></hr>
              <div className="stats">
                <i className="far fa-clock"></i>
                Campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
  <div className="card">
    <div className="card-header">
      <h4 className="card-title">2017 Sales</h4>
      <p className="card-category">All products including Taxes</p>
    </div>
    <div className="card-body">
      <div className="ct-chart" id="chartActivity">
        {/* <ChartistGraph
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mai",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            series: [
              [
                542,
                443,
                320,
                780,
                553,
                453,
                326,
                434,
                568,
                610,
                756,
                895,
              ],
              [
                412,
                243,
                280,
                580,
                453,
                353,
                300,
                364,
                368,
                410,
                636,
                695,
              ],
            ],
          }}
          type="Bar"
          options={{
            seriesBarDistance: 10,
            axisX: {
              showGrid: false,
            },
            height: "245px",
          }}
          responsiveOptions={[
            [
              "screen and (max-width: 640px)",
              {
                seriesBarDistance: 5,
                axisX: {
                  labelInterpolationFnc: function (value) {
                    return value[0];
                  },
                },
              },
            ],
          ]}
        /> */}
      </div>
    </div>
    <div className="card-footer">
      <div className="legend">
        <i className="fas fa-circle text-info"></i>
        Tesla Model S <i className="fas fa-circle text-danger"></i>
        BMW 5 Series
      </div>
      <hr></hr>
      <div className="stats">
        <i className="fas fa-check"></i>
        Data information certified
      </div>
    </div>
  </div>
</div>
<div className="col-md-6">
  <div className="card">
    <div className="card-header">
      <h4 className="card-title">Tasks</h4>
      <p className="card-category">Backend development</p>
    </div>
    <div className="card-body">
      <div className="table-full-width">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="form-check mb-1 pl-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox1"
                    defaultValue=""
                  />
                  <label className="form-check-label" htmlFor="checkbox1">
                    <span className="form-check-sign"></span>
                  </label>
                </div>
              </td>
              <td>
                Sign contract for "What are conference organizers afraid of?"
              </td>
              <td className="td-actions text-right">
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-times"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check mb-1 pl-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox2"
                    defaultChecked
                    defaultValue=""
                  />
                  <label className="form-check-label" htmlFor="checkbox2">
                    <span className="form-check-sign"></span>
                  </label>
                </div>
              </td>
              <td>
                Lines From Great Russian Literature? Or E-mails From My Boss?
              </td>
              <td className="td-actions text-right">
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-times"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check mb-1 pl-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                    defaultChecked
                    defaultValue=""
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    <span className="form-check-sign"></span>
                  </label>
                </div>
              </td>
              <td>
                Flooded: One year later, assessing what was lost and what was
                found when a ravaging rain swept through metro Detroit
              </td>
              <td className="td-actions text-right">
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-times"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check mb-1 pl-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox4"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="checkbox4">
                    <span className="form-check-sign"></span>
                  </label>
                </div>
              </td>
              <td>
                Create 4 Invisible User Experiences you Never Knew About
              </td>
              <td className="td-actions text-right">
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-times"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check mb-1 pl-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox5"
                    defaultValue=""
                  />
                  <label className="form-check-label" htmlFor="checkbox5">
                    <span className="form-check-sign"></span>
                  </label>
                </div>
              </td>
              <td>Read "Following makes Medium better"</td>
              <td className="td-actions text-right">
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-times"></i>
                </button>
                </td>
              <td>Unfollow 5 enemies from Twitter</td>
              <td className="td-actions text-right">
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-simple btn-link p-1" type="button">
                  <i className="fas fa-times"></i>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer">
        <hr></hr>
        <div className="stats">
          <i className="now-ui-icons loader_refresh spin"></i>
          Updated 3 minutes ago
        </div>
      </div>
    </div>
  </div>
    </Container>
  );
};

export default Home;
