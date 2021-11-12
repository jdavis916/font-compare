<?php include('partials/adminHeader.php'); ?>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 pgAdminDashboard">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>

     <!--  <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas> -->

      <h2>Controls</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>UpdateDatabase</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button id="btnUpdateGames" class="btn btn-warning">Update Games</button>
              </td>
              <td><button id="btnUpdateGames2" class="btn btn-danger">Button 2</button></td>
              <td><button id="btnUpdateGames3" class="btn btn-success">Button 3</button></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

    <?php include('partials/adminFooter.php'); ?>