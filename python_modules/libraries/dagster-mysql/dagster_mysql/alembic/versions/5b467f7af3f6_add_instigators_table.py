"""add instigators table

Revision ID: 5b467f7af3f6
Revises: d538c9496c01
Create Date: 2022-03-18 16:17:20.338259

"""
from dagster.core.storage.migration.utils import create_instigators_table

# revision identifiers, used by Alembic.
revision = "5b467f7af3f6"
down_revision = "d538c9496c01"
branch_labels = None
depends_on = None


def upgrade():
    create_instigators_table()


def downgrade():
    pass
