
import React from "react";

function template() {
                return (
            <React.Fragment>

            <main>
                <div className={classes.searchBar}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8" >
                                <Input type="text" onChange={this.filterHandle} placeholder="Type To Search By Name" bssize="md" />
                                <br />
                            </div>


                            <div className="col-md-4">
                                <Select
                                    name="category"
                                    value={this.state.category}
                                    onChange={this.handleSelect}
                                    options={options}
                                />


                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                        {this.state.productData.filter(p => (p.status === 'Approved' && p.session !== undefined)).map(product => (
                            <Grid item key={product._id} sm={6} md={4} lg={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={product.imageUrl[0]} // eslint-disable-line max-len
                                        title={product.name}

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {product.name}
                                        </Typography>
                                        <Typography>
                                            {product.description.slice(0, 50) + '...'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={`/productmt/${product._id}`}>
                                            <Button size="small" color="primary">
                                                Details
                                        </Button>
                                        </Link>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </main>
            {/* Footer */}
            {/* <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
            </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
            </Typography>
            </footer> */}
            {/* End footer */}
            </React.Fragment>
        );
};

export default template;