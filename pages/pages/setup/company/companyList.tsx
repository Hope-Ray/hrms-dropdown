import React, { ReactElement, useState, useMemo, useCallback } from 'react';
import Head from 'next/head';
import Breadcrumb from '@common/Breadcrumb';
import Layout from '@common/Layout';
import { Card, Col, Button, Row, Container, Modal,Form } from 'react-bootstrap';
import TableContainer from '@common/TableContainer';
import { useRouter } from 'next/router';



const newPage = () => {

    const router = useRouter();

    const handleAddButtonClick = () => {
        router.push('/pages/setup/company/companyForm/companyForm');
      };


      const staticData = [
        {
            id: "Salt-Tech Software Services LLP",
            country: "India",
            createDate: "2023-10-09",
            parentCompany: "Parent Company"
        },
        {
            id: "Salt-Tech Software Services LLP",
            country: "India",
            createDate: "2023-10-09",
            parentCompany: ""
        },
        {
            id: "Salt-Tech Software Services LLP",
            country: "India",
            createDate: "2023-10-09",
            parentCompany: "Parent Company"
        },
        {
            id: "Salt-Tech Software Services LLP",
            country: "India",
            createDate: "2023-10-09",
            parentCompany: ""
        },

        // Add more objects as needed
    ];


    const columns = useMemo(
        () => [
            {
                id: "#",
                Header: "#",
                disableFilters: true,
                filterable: false,
                accessor: (cellProps: any) => {
                    return (
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                        </div>)
                },
            },
            {
                Header: "ID",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (cellProps.id)
                },
            },
            {
                Header: "Country",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return cellProps.country;
                },
            },
            {
                Header: "Parent Company",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return cellProps.parentCompany;
                },
            },
        ],
        []
      );


    return (
        <React.Fragment>
            <Head>
                <title>Company List</title>
            </Head>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Pages" breadcrumbItem="Company List" />
                    <div className="text-end m-2">
                        <Button type="submit" className="btn-sm mx-4" variant="primary" onClick={handleAddButtonClick}><i className="ri-add-line align-bottom me-1"></i>Add Company</Button>
                    </div>

                    {/* ______________________Table_____________________ */}
                    <Row>
                            <Col lg={12}>
                                <Card id="apiKeyList">
                                    <Card.Header className="d-flex align-items-center">
                                        <h5 className="card-title flex-grow-1 mb-0">Company List</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <TableContainer
                                            columns={(columns || [])}
                                            data={(staticData || [])}
                                            isPagination={true}
                                            isGlobalFilter={true}
                                            iscustomPageSize={false}
                                            isBordered={false}
                                            customPageSize={5}
                                            className="custom-header-css table align-middle table-nowrap"
                                            tableClassName="table-centered align-middle table-nowrap mb-0"
                                            theadClassName="text-muted table-light"
                                            SearchPlaceholder='Search Company...'
                                            
                                        />
                                        <div className="noresult" style={{ display: "none" }}>
                                            <div className="text-center">
                                                {/* <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon> */}
                                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                                <p className="text-muted mb-0">We've searched more than 150+ API Keys We did not find any API for you search.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                </Container>

            </div>
        </React.Fragment >
    );
}

newPage.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default newPage;;