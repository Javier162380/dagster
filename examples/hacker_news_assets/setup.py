from setuptools import find_packages, setup

setup(
    name="hacker_news_assets",
    version="0+dev",
    author="Elementl",
    author_email="hello@elementl.com",
    classifiers=[
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Operating System :: OS Independent",
    ],
    packages=find_packages(exclude=["test"]),
    package_data={"hacker_news_assets": ["hacker_news_dbt/*"]},
    install_requires=[
        "aiobotocore==1.3.3",
        "dagster",
        "dagster-aws",
        "dagster-dbt",
        "dagster-pandas",
        "dagster-pyspark",
        "dagster-slack",
        "dagster-postgres",
        "dbt-core",
        "dbt-duckdb",
        "dbt-snowflake",
        "duckdb!=0.3.3",  # missing wheels
        "mock",
        # DataFrames were not written to Snowflake, causing errors
        "pandas<1.4.0",
        "pyarrow>=4.0.0",
        "pyspark",
        "requests",
        "gcsfs",
        "fsspec",
        "s3fs",
        "scipy",
        "sklearn",
        "snowflake-sqlalchemy",
    ],
    extras_require={"tests": ["mypy", "pylint", "pytest"]},
)
